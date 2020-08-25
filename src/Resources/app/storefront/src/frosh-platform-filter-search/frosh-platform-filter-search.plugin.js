import Plugin from 'src/plugin-system/plugin.class';
import DomAccess from 'src/helper/dom-access.helper';
import Iterator from 'src/helper/iterator.helper';

export default class FroshPlatformSearchFilterPlugin extends Plugin {
    static options = {
        dropdownSelector: '.filter-panel-items-container .dropdown',
    };

    init() {
        this._registerEvents();
    }

    _registerEvents() {
        this.el.addEventListener('input', this._onInput.bind(this));
        $(this.options.dropdownSelector).on('shown.bs.dropdown', this._onDropdownShown.bind(this));
    }

    _onInput(event) {
        const value = event.target.value.trim().toLowerCase();
        const dropdown = event.target.closest('.filter-multi-select-dropdown');

        const list = DomAccess.querySelector(dropdown, '.filter-multi-select-list');
        const listItems = DomAccess.querySelectorAll(list, 'li');
        const listItemsArray = Array.from(listItems);

        Iterator.iterate(listItemsArray, listItem => {
            listItem.style.display = 'none';
            const labelElement = DomAccess.querySelector(listItem, '.filter-multi-select-item-label');
            const label = labelElement.innerText.trim().toLowerCase();

            if (label.includes(value)) {
                listItem.style.display = null;
            }
        });
    }

    _onDropdownShown(event) {
        const dropdown = event.relatedTarget.closest('.dropdown');
        const filterInput = DomAccess.querySelector(dropdown, '[data-frosh-platform-filter-search=true]', false);

        if (!filterInput) {
            return;
        }

        filterInput.focus({
            preventScroll: true
        });
    }
}
