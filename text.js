function cargar() {
          fetch('https://sga.unemi.edu.ec/api?a=apilistaarticulos&a=apilistaarticulos&ida=0')
          .then(response => response.json())
          .then(data => {
            const table = document.getElementById('dataarticulos')

            data.forEach(item => {
              const row = document.createElement('tr');
              row.innerHTML = `
               <td>${item.apellidos}</td>
               <td>${item.articulos}</td>
               <td>${item.base}</td>
               <td>${item.enlace}</td>
               <td>${item.fecha}</td>
               <td>${item.links}</td>
               <td>${item.revista}</td>
              `
              table.appendChild(row);
            })
          });
        }