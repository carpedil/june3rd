function showTabBar(){
    return {
        type:"show-tabbar",
        payload:true
    }
}


function hiddeTabBar(){
    return {
        type: "hidde-tabbar",
        payload: false
    }
}

export { showTabBar, hiddeTabBar }
