
const tabs = document.querySelectorAll('.brs li');
const searchInput = document.getElementById('searchInput');
const amenitiesTitle = document.getElementById('amenitiesTitle');
const amenitiesList = document.getElementById('amenitiesList');
const advancedBox = document.getElementById('advancedBox');
const toggleAdvance = document.getElementById('toggleAdvance');

const data = {
  buy:{
    placeholder:'Search properties for sale',
    title:'Amenities for Sale Properties',
    list:['✔ Balcony','✔ Parking','✔ Lift','✔ Power Backup']
  },
  rent:{
    placeholder:'Search rental homes or offices',
    title:'Amenities for Rental Properties',
    list:['✔ Furnished','✔ Water Supply','✔ Maintenance','✔ Nearby Transport']
  },
  sold:{
    placeholder:'Search sold properties',
    title:'Sold Property Details',
    list:['✔ Verified Sale','✔ Registered','✔ Market Price','✔ Location Info']
  }
};

tabs.forEach(tab=>{
  tab.addEventListener('click',()=>{
    tabs.forEach(t=>t.classList.remove('active'));
    tab.classList.add('active');

    const type = tab.dataset.type;
    searchInput.placeholder = data[type].placeholder;
    amenitiesTitle.innerText = data[type].title;

    amenitiesList.innerHTML = '';
    data[type].list.forEach(item=>{
      amenitiesList.innerHTML += `<li>${item}</li>`;
    });

    advancedBox.style.display = 'none';
  });
});

toggleAdvance.addEventListener('click',()=>{
  advancedBox.style.display =
    advancedBox.style.display === 'block' ? 'none' : 'block';
});






var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
});