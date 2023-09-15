try{
    const settings = {};
    let isEnabled = true
    let classList = []
    
    const getDiv = () => {
        requestAnimationFrame(getDiv)
        loadSettings()
        if(isEnabled){
            if(classList.length > 0){
                classList.map((className) => {
                    let wrappers = document.getElementsByClassName(className)
                    if(wrappers.length > 0){
                        for(let i = 0; i < wrappers.length; i++){
                            let wrapper = wrappers[i]
                            if(wrapper.style.height != "max-content"){
                                wrapper.style.height = "max-content"
                            }
                            if(wrapper.style.maxHeight != "max-content"){
                                wrapper.style.maxHeight = "max-content"
                            }
                        }
                    }
                })
            }
        } 
    }
    
    getDiv()
    
    async function loadSettings() {
        const data = await chrome.storage.sync.get("settings");
        Object.assign(settings, data.settings);
        isEnabled = Boolean(settings.AE_enabled) ?? true;
        classList = settings.AE_list.split("\n") ?? ""
    }
} catch(e){
    console.error(e)
}