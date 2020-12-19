window.addEventListener('DOMContentLoaded', (event) => {

    const name=document.querySelector('#name');
    const nameError=document.querySelector('.name-error');
    name.addEventListener('input',function(){
        let names=document.querySelector('#name').value.split(" ");
        if(names[0].length==0){
            nameError.textContent="";
            return;
        }
        try{
            (new AddressBook()).fullName=name.value;
            nameError.textContent="";
        }catch(e){
           nameError.textContent=e;
        }
    })

     const addressElement=document.querySelector('#address');
     const addressError=document.querySelector('.address-error');
     addressElement.addEventListener('input',function(){
         try{
             (new AddressBook()).address=addressElement.value;
             addressError.textContent="";
         }catch(e){
             addressError.textContent=e;
         }
     })

    const phoneElement=document.querySelector('#mobile');
    const phoneError=document.querySelector('.mobile-error');
    phoneElement.addEventListener('input',function(){
        try{
            (new AddressBook()).mobileNumber=phoneElement.value;
            phoneError.textContent="";
        }catch(e){
            phoneError.textContent=e;
        }
    })

  });

  const saveForm=(event)=>{
      try{
        let addressBookData=createAddressBookData();
        createAndUpdateStorage(addressBookData);
      }catch(e){
          console.log(e);
          return;
      }
    
  }

  const createAddressBookData=()=>{
    let addressBook=new AddressBook();
    addressBook.fullName=document.querySelector('#name').value,
    addressBook.mobileNumber=document.querySelector('#mobile').value,
    addressBook.address=document.querySelector('#address').value,
    addressBook.city=document.querySelector('#city').value,
    addressBook.state=document.querySelector('#state').value,
    addressBook.zip=document.querySelector('#zip').value
    alert(JSON.stringify(addressBook));
    return addressBook;
  }

    function createAndUpdateStorage(addressBookData){
       let addressBookList=JSON.parse(localStorage.getItem("AddressBookList"));
       if(addressBookList != undefined) addressBookList.push(addressBookData);
       else addressBookList=[addressBookData];
       alert(addressBookList.toString());
       localStorage.setItem("AddressBookList",JSON.stringify(addressBookList));
   }

    const resetForm=()=>{
        setValue('#name','');
        setValue('#mobile','');
        setValue('#address','');
        setValue('#city','');
        setValue('#state','');
        setValue('#zip','');
    }

    const setValue=(id,value)=>{
        document.querySelector(id).value=value;
    }