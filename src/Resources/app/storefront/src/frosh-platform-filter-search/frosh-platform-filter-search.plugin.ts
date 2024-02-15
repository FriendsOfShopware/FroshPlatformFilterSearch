type HTMLElementEvent<T extends HTMLElement> = Event & {
    target: T;
}

export default class FroshPlatformSearchFilterPlugin extends window.PluginBaseClass {
    static options = {
        dropdownSelector: ".filter-panel-items-container .dropdown"
    };

    init() {
        this._registerEvents();
    }

    _registerEvents() {
        this.el.addEventListener("input", this._onInput.bind(this));
        let dropdowns = document.querySelectorAll(this.constructor.options.dropdownSelector);
        dropdowns && dropdowns.forEach(dropdown => {
            dropdown.addEventListener("shown.bs.dropdown", this._onDropdownShown.bind(this));
        });
    }

    _onInput(event) {
        let searchTerm = event.target.value.trim().toLowerCase();
        let listItems = event.target.closest(".filter-multi-select-dropdown").querySelector(".filter-multi-select-list").querySelectorAll("li");
        listItems.forEach(item => {
            item.style.display = "none";
            let label = item.querySelector(".filter-multi-select-item-label").innerText.trim().toLowerCase();
            if (label.includes(searchTerm)) {
                item.style.display = null;
            }
        });
    }

    _onDropdownShown(event) {
        let dropdown = event.relatedTarget.closest(".dropdown");
        if (!dropdown) return;
        let searchInput = dropdown.querySelector("[data-frosh-platform-filter-search=true]");
        if (!searchInput) return;
        let dropdownMenu = dropdown.querySelector(".dropdown-menu");
        if (dropdownMenu) {
            dropdownMenu.classList.add("fpfs-dropdown-is--expanded");
            searchInput.focus({ preventScroll: true });
        }
    }
}
