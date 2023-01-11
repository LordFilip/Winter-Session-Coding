    var films = [
        {
          name: 'Joe Dirt',
          year: 2000,
          country: 'SAD',
          note: 'Nema napomena',
          actorsArray: ['David Spade', 'Brittany Daniel', 'Christopher Walken']
        },
        {
          name: 'The Shawshank Redemption',
          year: 1994,
          country: 'SAD',
          note: 'Nema napomena',
          actorsArray: ['Tim Robbins', 'Morgan Freeman', 'Clancy Brown']
        },
        {
          name: 'Million Dollar Baby',
          year: 2004,
          country: 'SAD',
          note: 'Nema napomena',
          actorsArray: ['Hillary Swank', 'Morgan Freeman', 'Clint Eastwood']
        }
      ];

    films.forEach(function(film){

      const table = document.getElementById('table-body');

      const row = document.createElement('tr');
      const watchedCell = document.createElement('td');
      const nameCell = document.createElement('td');
      const yearCell = document.createElement('td');
      const countryCell = document.createElement('td');
      const noteCell = document.createElement('td');
      const actorsCell = document.createElement('td');

      textContent(watchedCell, nameCell, yearCell, countryCell, noteCell, actorsCell, film);

      appending(watchedCell, nameCell, yearCell, countryCell, noteCell, actorsCell, row,table);
    });

    const form = document.getElementById('exampleModal');

    form.addEventListener('submit', (event) => {

      event.preventDefault();
      creatingRow();
      document.getElementById("form").reset();
    });

    var creatingRow = function(){

      const name = document.getElementById('name').value;
      const year = parseInt(document.getElementById('year').value);
      const country = document.getElementById('country').value;
      const note = document.getElementById('note').value;
      const actors = document.getElementById('actors').value;
      const actorsArray = actors.split(',');

      var film = {name, year, country, note, actorsArray};

      films.push(film);
      console.log(films);

      const table = document.getElementById('table-body');

      const lastFilm = films[films.length-1];

      row = document.createElement('tr');
      watchedCell = document.createElement('td');
      nameCell = document.createElement('td');
      yearCell = document.createElement('td');
      countryCell = document.createElement('td');
      actorsCell = document.createElement('td');
      noteCell = document.createElement('td');

      textContent(watchedCell, nameCell, yearCell, countryCell, noteCell, actorsCell, lastFilm);

      appending(watchedCell, nameCell, yearCell, countryCell, noteCell, actorsCell, row,table);

      colors();
    };

  function textContent(watchedCell, nameCell, yearCell, countryCell, noteCell, actorsCell, film){

      watchedCell.innerHTML = '<input type="checkbox" class="checkbox">';
      nameCell.textContent = film.name;
      yearCell.textContent = film.year;
      countryCell.textContent = film.country;
      noteCell.textContent = film.note;
      actorsCell.textContent = film.actorsArray;

  }

  function appending(watchedCell, nameCell, yearCell, countryCell, noteCell, actorsCell, row, table){

      row.appendChild(watchedCell);
      row.appendChild(nameCell);
      row.appendChild(yearCell);
      row.appendChild(countryCell);
      row.appendChild(noteCell);
      row.appendChild(actorsCell);
      table.appendChild(row);
  }

  function colors(){

    var checkboxes = document.querySelectorAll(".checkbox");

    checkboxes.forEach((checkbox) => {

      let closestRow = checkbox.closest("tr");
      if(!checkbox.checked){
        closestRow.style.backgroundColor = "#F8D7DA";
      }

      checkbox.addEventListener("click", function(){
        if (this.checked){
          closestRow.style.backgroundColor = "#D1E7DD";
        } else {
          closestRow.style.backgroundColor = "#F8D7DA";
        }
      });
    });
  }

  window.onload = function() {
    colors();
  };