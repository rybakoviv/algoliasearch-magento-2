define([], function () {
    return {
        getNoResultHtml: function () {
            return 'No Results';
        },

        getHeaderHtml: function ({section}) {
            return section.label || section.name;
        },

        getItemHtml: function ({item, components, html, section}) {
            return html`<a class="aa-ItemLink" href="/catalogsearch/result/?q=${encodeURIComponent(item.query)}&${section.name}=${encodeURIComponent(item.value)}">
                ${components.Highlight({ hit: item, attribute: 'value' })}
            </a>`;
            
        },

        getFooterHtml: function () {
            "";
        }        
    };
});
