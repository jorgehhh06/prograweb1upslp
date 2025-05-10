let totalScore = 0;
const answers = {
    Fragen1: 1,
    Fragen2: 1,
    Fragen3: 1,
    Fragen4: 1,
    Fragen5: 1,
};

function evaluateQuiz() {
    totalScore = 0;
    const form = document.getElementById('quizForm');
    
    // Evaluar respuestas
    for (let i = 1; i <= 6; i++) {
        const question = form[`q${i}`];
        for (let j = 0; j < question.length; j++) {
            if (question[j].checked) {
                totalScore += parseInt(question[j].value);
            }
        }
    }

    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `<h3>Puntuación: ${totalScore}/5</h3>`;

    createChart();
}

function createChart() {
    const ctx = document.getElementById('chartContainer');
    const data = {
        labels: ['Pregunta 1', 'Pregunta 2', 'Pregunta 3', 'Pregunta 4', 'Pregunta 5', 'Pregunta 6'],
        datasets: [{
            label: 'Puntos por Pregunta',
            data: [
                totalScore >= 10 ? answers.Fragen1 : 0,
                totalScore >= 20 ? answers.Fragen2 : 0,
                totalScore >= 30 ? answers.Fragen3 : 0,
                totalScore >= 40 ? answers.Fragen4 : 0,
                totalScore >= 50 ? answers.Fragen5 : 0,
            ],
            backgroundColor: ['orangered', 'limegreen', 'royalblue', 'orange', 'purple', 'mediumturquoise'],
borderColor: ['orangered', 'limegreen', 'royalblue', 'orange', 'purple', 'mediumturquoise'],
            borderWidth: 1
        }]
    };

    new Chart(ctx, {
        type: 'bar',
        data: data,
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}

function generatePDF() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();
    
    doc.text('Cuestionario idiomas', 20, 10);
    doc.text(`Tu puntuación es: ${totalScore}/60`, 20, 20);
    doc.addPage();
    doc.text('Gráfico de Resultados', 20, 10);

    doc.addImage(document.getElementById('chartContainer'), 'PNG', 20, 30, 170, 80);
    
    doc.save('Cuestionario idiomas.pdf');
}
