export class Menuitem {
    page: string; // href
    fa: string; // font aw icon
    label: string; // label (home)
    constructor(page: string, fa: string, label: string){
        this.page = page;
        this.fa = fa;
        this.label = label;
    }
}
