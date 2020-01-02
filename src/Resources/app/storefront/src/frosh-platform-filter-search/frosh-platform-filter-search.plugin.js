import Plugin from 'src/plugin-system/plugin.class';

export default class FroshPlatformSearchFilterPlugin extends Plugin {
    static options = {
        optionListSizeTrigger: 10,
        dropdownSelector: '#filter-panel-wrapper .dropdown',
    };

    init() {
        this._registerEvents();
    }

    _registerEvents() {
        this.el.addEventListener('input', this._onInput.bind(this));
        $(this.options.dropdownSelector).on('shown.bs.dropdown', this._onDropdownShown.bind(this));
    }

    _onInput(event) {
        const value = event.target.value;

        const listItems = event.target
            .closest('.filter-multi-select-dropdown')
            .querySelector('.filter-multi-select-list')
            .querySelectorAll('li');

        const listArray = Array.from(listItems);

        listArray.forEach(item => {
            item.style.display = 'none';
            const label = item.querySelector('.filter-multi-select-item-label').innerHTML.trim().toLowerCase();

            if (label.includes(value)) {
                item.style.display = 'list-item';
            }
        });
    }

    _onDropdownShown(event) {
        event.relatedTarget.closest('.dropdown').querySelector('[data-frosh-platform-filter-search=true]').focus();
    }
}
