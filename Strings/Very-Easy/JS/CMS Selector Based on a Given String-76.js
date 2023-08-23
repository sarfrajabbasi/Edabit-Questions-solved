function cmsSelector(arr,str){
    let newArr = []
    for(let i =0;i<arr.length;i++){
        if(arr[i].includes(str)){
        newArr.push(arr[i])
        }

    }
    return newArr.sort();

}

console.log(cmsSelector(["WordPress", "Joomla", "Drupal", "Magento", "Shopify", "Blogger"], "er"), ["Blogger"])
console.log(cmsSelector(["WordPress", "Joomla", "Drupal", "Magento", "Shopify", "Blogger"], ""), ["Blogger", "Drupal", "Joomla", "Magento", "Shopify", "WordPress"])
console.log(cmsSelector(["WordPress", "Joomla", "Drupal", "Magento", "Shopify", "Blogger"], "oJ"), [])