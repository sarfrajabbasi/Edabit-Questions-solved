function cmsSelector(arr, str) {
	return arr.filter(x => x.includes(str)).sort((a,b) => {
        const nameA = a.toUpperCase();
        const nameB = b.toUpperCase();
        return (nameA < nameB)? -1 : (nameA > nameB) ? 1 :0;
    })
}

console.log(cmsSelector(["WordPress", "Joomla", "Drupal", "Magento", "Shopify", "Blogger"], "er"), ["Blogger"])
console.log(cmsSelector(["WordPress", "Joomla", "Drupal", "Magento", "Shopify", "Blogger"], ""), ["Blogger", "Drupal", "Joomla", "Magento", "Shopify", "WordPress"])
console.log(cmsSelector(["WordPress", "Joomla", "Drupal", "Magento", "Shopify", "Blogger"], "oJ"), [])