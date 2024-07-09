function openModal() {
    document.getElementById('myModal').style.display = 'block';
    document.getElementById('mainHeader').classList.add('blur');
    document.getElementById('mainContainer').classList.add('blur');
}

// Función para cerrar el modal
function closeModal() {
    document.getElementById('myModal').style.display = 'none';
    document.getElementById('mainHeader').classList.remove('blur');
    document.getElementById('mainContainer').classList.remove('blur');
}
function crearGraficaSeguimiento() {
    const ctx = document.getElementById('productosEnCaminoChart').getContext('2d');
    const productosEnCaminoChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['14 de Junio, 23:38', '14 de Junio, 23:38', '15 de Junio, 18:29', '01 de Julio, 15:19'],
            datasets: [{
                label: 'Seguimiento del Pedido',
                data: [1, 2, 3, 4],
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1,
                fill: false,
                tension: 0.1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: {
                        stepSize: 1,
                        callback: function(value, index, values) {
                            const steps = ['Pedido realizado', 'Pago confirmado', 'Pedido enviado', 'Pedido entregado'];
                            return steps[value - 1];
                        }
                    }
                }
            },
            responsive: true,
            plugins: {
                legend: {
                    display: true,
                    position: 'top'
                },
                title: {
                    display: true,
                    text: 'Seguimiento del Pedido en el Tiempo'
                }
            }
        }
    });
}

document.getElementById('verDetalleBtn').addEventListener('click', function() {
    document.getElementById('graficaContainer').style.display = 'block';
    crearGraficaSeguimiento();
});
