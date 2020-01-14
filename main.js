const priceBasic = document.getElementById('value-basic');
const priceProfessional = document.getElementById('value-professional');
const priceMaster = document.getElementById('value-master');
const switchToggle = document.getElementById('toggle-slider');
let toggleStatus = 'monthly'

const switchFunction = () => {
    if(toggleStatus === 'annually') {
        toggleStatus = 'monthly'
        priceBasic.innerHTML = '19.99'
        priceProfessional.innerHTML = '24.99'
        priceMaster.innerHTML = '39.99'
    }else if(toggleStatus === 'monthly') {
        toggleStatus = 'annually'
        priceBasic.innerHTML = '199.99'
        priceProfessional.innerHTML = '249.99'
        priceMaster.innerHTML = '399.99'
    }
}

switchToggle.addEventListener('click', switchFunction)
