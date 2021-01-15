export const myScrollTo = (id : string) => {
    const element_to_scroll_to = document.getElementById(id);
    if(element_to_scroll_to != null){
        element_to_scroll_to.scrollIntoView();
    }
}