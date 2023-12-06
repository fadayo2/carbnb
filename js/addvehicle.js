const imageBox = document.getElementById('imageBox')

var loadFile = function(event) {
    // var image = document.getElementById('output');
    let image = URL.createObjectURL(event.target.files[0]);

    imageBox.style.cssText+= `background-image:url(${image})`
    document.getElementById('txt').style.display = 'none'
};

const information = {
    fname: '',
    lname: '',
    add1: '',
    add2: '',
    gender: '',
    uName: '',
    pWord: '',
    conPword: '',
    cName: '',
    cBrand: '',
    cYear: '',
    cState: '',
    lPlan: '',
    pMethod: '',
    commentText: '',
    pAddress: '',
    carImage: '',   
}

let firstName = document.getElementById('fName');
let lastName = document.getElementById('lName');
let address1 = document.getElementById('add1');
let address2 = document.getElementById('add2');
let gender = document.getElementById('gender');
let userName = document.getElementById('uName');
let password = document.getElementById('pWord');
let confirmPassword = document.getElementById('conPword');
let carName = document.getElementById('cName');
let carBrand = document.getElementById('cBrand');
let carYear = document.getElementById('cYear');
let carState = document.getElementById('acc');
let leasingPlan = document.getElementById('leasePlan');
let payMethod = document.getElementById('payMethod');
let comment = document.getElementById('comment');
let pickupAddress = document.getElementById('pAddress');


let userInfo;


const sub = () => {
    information.fname = firstName.value;
    information.lname = lastName.value;
    information.add1 = address1.value;
    information.add2 = address2.value;
    information.gender = gender.value;
    information.uName = userName.value;
    information.pWord = password.value;
    information.conPword = confirmPassword.value;
    information.cName = carName.value;
    information.cBrand = carBrand.value;
    information.cYear = carYear.value;
    information.cState = carState.value;
    information.lPlan = leasingPlan.value;
    information.pMethod = payMethod.value;
    information.commentText = comment.value;
    information.pAddress = pickupAddress.value;
    information.carImage = imageBox.style.backgroundImage;

    localStorage.setItem('userInformation' , JSON.stringify(information));
    userInfo = JSON.parse(localStorage.getItem('userInformation'));

    if(
        userInfo.fname === '' ||
        userInfo.lname === '' ||
        userInfo.add1 === '' ||
        userInfo.gender === '' ||
        userInfo.uName === '' ||
        userInfo.pWord === '' ||
        userInfo.conPword === '' ||
        userInfo.cName === '' ||
        userInfo.cBrand === '' ||
        userInfo.cState === '' ||
        userInfo.cYear === '' ||
        userInfo.lPlan === '' ||
        userInfo.pMethod === '' ||
        userInfo.pAddress === '' ||
        userInfo.carImage === '' 
    ){
        var notyf = new Notyf(
            {
                duration: 3000,
                position : {
                    x : 'center',
                    y : 'top'
                },
                
                dismissible: true,
            }
        );
        // Display an error notification
        notyf.error('You must fill out the form before moving forward');
    } else {
        document.getElementById('confirmatonbg').style.display = 'block';
        document.getElementById('confirmatonBox').style.display = 'flex';
    }
    console.log(userInfo)
};

const confirmed = () => {
    document.getElementById('confirmatonbg').style.display = 'none';
    document.getElementById('confirmatonBox').style.display = 'none';
    document.getElementById('redirecting').style.display = 'flex';

    setTimeout(()=>{
        window.location.href = 'index.html';
    },5000)
}

const notConfirmed = () => {
    document.getElementById('confirmatonbg').style.display = 'none';
    document.getElementById('confirmatonBox').style.display = 'none';
    document.getElementById('redirecting').style.display = 'none';
}



