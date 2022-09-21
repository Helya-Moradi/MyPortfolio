let template = document.createElement('template');
template.innerHTML = ` 
<link rel="stylesheet" href="components/project/project.css">
<div>
<a href="" class="links" target="-blank">
    <img src="" alt="" class="bg-img">
    <div class="section-overlay color">
        <span>Visit the site</span>
    </div>
</a>
</div>`;

class Project extends HTMLElement {
    constructor() {
        super()

        this.attachShadow({
            mode: 'open'
        })
        this.shadowRoot.appendChild(template.content.cloneNode(true))
    }
    connectedCallback() {
        this.shadowRoot.querySelector('.bg-img').src=this.getAttribute('img-src');
        this.shadowRoot.querySelector('.bg-img').setAttribute('alt',this.getAttribute('img-alt'));
        this.shadowRoot.querySelector('.links').setAttribute('href',this.getAttribute('link'));
        this.shadowRoot.querySelector('.color').style.cssText=`color:${this.getAttribute('color')}; background-color:${this.getAttribute('bg-color')};`
    }
    static observedAttributes() {
        return ['img-src','img-alt','link','color','bg-color'];
    }

}

export {
    Project
}