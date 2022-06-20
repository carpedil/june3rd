function showTabBar(){
    return {
        type:"show-tabbar",
        value:true
    }
}


function hiddeTabBar(){
    return {
        type: "hidde-tabbar",
        value: false
    }
}

export { showTabBar, hiddeTabBar }
