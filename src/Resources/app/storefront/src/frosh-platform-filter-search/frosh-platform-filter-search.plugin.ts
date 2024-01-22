type HTMLElementEvent<T extends HTMLElement> = Event & {
    target: T;
}

export default class FroshPlatformSearchFilterPlugin extends window.PluginBaseClass {
    static options = {
        dropdownSelector: '.filter-panel-items-container .dropdown',
    };

    init() {
        this._registerEvents();
    }

    _registerEvents() {
        this.el.addEventListener('input', this._onInput.bind(this));

        const dropdowns = document.querySelectorAll(this.options.dropdownSelector);
        if(dropdowns) {
            dropdowns.forEach((dropdown) => {
                dropdown.addEventListener('shown.bs.dropdown', this._onDropdownShown.bind(this));
            });
        }
    }

    _onInput(event: HTMLElementEvent<HTMLInputElement>) {
        const value = event.target.value.trim().toLowerCase();
        const dropdown = event.target.closest('.filter-multi-select-dropdown');

        const list = dropdown.querySelector('.filter-multi-select-list');
        const listItems = list.querySelectorAll('li');
        const listItemsArray = Array.from(listItems);

        for (const listItem of listItemsArray) {
            listItem.style.display = 'none';
            const labelElement = listItem.querySelector( '.filter-multi-select-item-label') as HTMLLabelElement;
            const label = labelElement.innerText.trim().toLowerCase();

            if (label.includes(value)) {
                listItem.style.display = null;
            }
        }
    }

    _onDropdownShown(event) {
        const dropdown = event.relatedTarget.closest('.dropdown');
        const filterInput = dropdown.querySelector('[data-frosh-platform-filter-search=true]');

        if (!filterInput) {
            return;
        }

        const dropdownMenu = dropdown.querySelector('.dropdown-menu');
        if (dropdownMenu) {
            dropdownMenu.classList.add('fpfs-dropdown-is--expanded');
        }

        filterInput.focus({
            preventScroll: true
        });
    }
}
