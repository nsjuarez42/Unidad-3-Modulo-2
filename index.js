    const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto",
        "Septiembre", "Octubre", "Noviembre", "Diciembre"
    ];
    const diasDelMes = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    var table = document.querySelector('table');
    var tbody = document.createElement('tbody');
    table.appendChild(tbody);

    function filaMes(tr, mes) {
        let tdmes = document.createElement('td');
        tdmes.appendChild(document.createTextNode(mes));
        tr.appendChild(tdmes);
    }

    function filaDias(tr, dia) {
        let tddias = document.createElement('td');
        tddias.appendChild(document.createTextNode(dia));
        tr.appendChild(tddias);
    }

    var i = 0;
    var llenartable = setInterval(() => {
        let tr = document.createElement('tr');
        filaMes(tr, meses[i]);
        filaDias(tr, diasDelMes[i]);
        tbody.appendChild(tr);
        i++;
    }, 1500);

    setTimeout(() => {
        clearInterval(llenartable);
    }, 1500 * diasDelMes.length);