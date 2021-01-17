let globalAirbnbdata = [];


window.addEventListener('load', async () => {
    infoRooms = document.querySelector('#infoRooms');
    fetchAirbnbdata();
    
});


async function fetchAirbnbdata(){
    const res = await fetch('https://dry-cliffs-94979.herokuapp.com/');
    globalAirbnbdata = await res.json();
    // return globalAirbnbdata;
    console.log(globalAirbnbdata);
    render();
    
}

function showRooms(){
    let roomsHTML = '<div class="rooms">';
    console.log(globalAirbnbdata);
    globalAirbnbdata.forEach((room)=>{
        const { name, photo, price, property_type} = room;
        const roomHTML = `
        <div class='room'>
        <div>
            <p>${name}</p>
            <p>${price}</p>
            <p>${property_type}</p>
        </div>
        <div>
          <img src="${photo}" alt="${name}">
        </div>
      </div>  
      `;
      roomsHTML += roomHTML;
    });
    roomsHTML += '</div>';
    infoRooms.innerHTML = roomsHTML;
    console.log(roomsHTML);

}

function render(){
    showRooms();
}

