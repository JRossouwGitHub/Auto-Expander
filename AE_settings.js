try{
    const btn = document.getElementById("AE_btn");
    const list = document.getElementById("AE_list")
    
    const settings = {};
    
    btn.addEventListener("change", (e) => {
        settings.AE_enabled = e.target.checked
        chrome.storage.sync.set({ settings });
    });
    
    list.addEventListener("focusout", (e) => {
        settings.AE_list = e.target.value
        chrome.storage.sync.set({ settings });
    })
    
    loadSettings()
    
    async function loadSettings() {
        const data = await chrome.storage.sync.get("settings");
        Object.assign(settings, data.settings);
        btn.checked = Boolean(settings.AE_enabled) ?? true;
        list.value = settings.AE_list ?? ""
    }
} catch(e){
    console.error(e)
}