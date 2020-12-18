window.addEventListener('DOMContentLoaded',(event)=>{
    createInnerHtml();
});

const createInnerHtml=()=>{
    const headerHtml=
    `<tr>
    <th></th>
    <th>Fullname</th>
    <th>Address</th>
    <th>City</th>
    <th>State</th>
    <th>Zip</th>
    <th>Phone Number</th>
    </tr>`;
    let innerHtml=`${headerHtml}`;
    document.querySelector('#table-display').innerHTML=innerHtml;
}
