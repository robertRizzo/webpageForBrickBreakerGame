document.addEventListener('DOMContentLoaded', () => {
    const explanations = {
        step1: `

        <h3>Steg 1: HTML-struktur</h3>
        <p>Här är en övergripande beskrivning av hur du bygger grundstrukturen för ditt HTML-dokument. För att se hela koden, klicka <a href="index.html">här</a>.</p>
        
        <h4>1.1 DOCTYPE</h4>
        <p>Ange dokumenttypen för ditt HTML-dokument med <code>&lt;!DOCTYPE html&gt;</code>.</p>
        
        <h4>1.2 Head</h4>
        <p>I head-taggen bör du inkludera:</p>
        <ul>
            <li>Meta-taggar för teckenkodning och viewport-inställningar för att säkerställa att din sida visas korrekt på olika enheter.</li>
            <li>En titel för att namnge din webbsida, vilket visas i webbläsarens flik.</li>
            <li>En länk till din CSS-fil för att tillämpa stilar på din HTML.</li>
        </ul>
        
        <h4>1.3 Body</h4>
        <p>I body-taggen skapar du grundstrukturen för spelet:</p>
        <ul>
            <li>Ett header-element som innehåller navigationslänkar för enkel navigering på sidan.</li>
            <li>Ett main-element för huvudinnehållet i spelet, där spelets element kommer att placeras.</li>
            <li>Ett footer-element för sidfoten, där du kan lägga till information som upphovsrätt och kontaktinformation.</li>
        </ul>
        `,
        step2: `
<h3>Steg 2: CSS-styling</h3>
<p>Här är en översikt över hur du lägger till grundläggande styling för ditt spel. För att se hela koden, klicka <a href="style.css">här</a>.</p>

<h4>2.1 Grundläggande Styling</h4>
<p>Applicera grundläggande styling på body-taggen för att sätta bakgrundsfärg, font och marginaler, vilket ger en grundläggande layout för spelet.</p>

<h4>2.2 Speltitel</h4>
<p>Styla speltiteln för att göra den framträdande och attraktiv, vilket hjälper till att fånga spelarens uppmärksamhet.</p>

<h4>2.3 Header och Navigation</h4>
<p>Styla header-elementet och navigationslänkarna för att göra det enkelt och intuitivt för användaren att navigera på sidan.</p>

<h4>2.4 Formulär och Knappar</h4>
<p>Styla formulärelement som användarnamninput och startknappen för att göra dem användarvänliga och estetiskt tilltalande.</p>

<h4>2.5 Spelskärm och Canvas</h4>
<p>Styla spelskärmen och canvasbehållaren för att skapa en tydlig och attraktiv spelyta, där spelet kommer att renderas.</p>

<h4>2.6 Meddelanden och Modaler</h4>
<p>Styla meddelanden som visas under spelets gång och informationsmodaler för att förbättra användarupplevelsen och ge tydlig feedback till spelaren.</p>


        `,
        step3: `
<h3>Steg 3: JavaScript-funktionalitet</h3>
<p>Här är en översikt över hur du lägger till funktionalitet till ditt spel med JavaScript. För att se hela koden, klicka <a href="script.js">här</a>.</p>

<h4>3.1 DOMContentLoaded (event handler)</h4>
<p>Skapa en eventlyssnare som initierar spelet när hela DOM har lästs in.</p>

<h4>3.2 startGame()</h4>
<p>Funktionen som startar spelet och initierar alla nödvändiga variabler och element.</p>

<h4>3.3 initializeGame()</h4>
<p>Funktionen som sätter upp den initiala spelskärmen och ställer in alla spelelement.</p>

<h4>3.4 resetBallAndPaddle()</h4>
<p>Funktionen som återställer positionen för bollen och paddeln efter varje omgång.</p>

<h4>3.5 randomizeBallDirection()</h4>
<p>Funktionen som slumpar riktningen för bollen för att göra spelet mer dynamiskt.</p>

<h4>3.6 applySpeedToBall()</h4>
<p>Funktionen som tillämpar hastighet på bollen och styr dess rörelse.</p>

<h4>3.7 initializeBricks()</h4>
<p>Funktionen som skapar och positionerar alla tegelstenar på spelskärmen.</p>

<h4>3.8 drawInitialScreen()</h4>
<p>Funktionen som ritar den initiala skärmen när spelet startas.</p>

<h4>3.9 Resterande Funktioner</h4>
<p>Implementera återstående funktioner som hanterar boll- och paddelrörelser, kollisioner, poängberäkning, livräkning, och andra spelfunktioner.</p>

<p>För hela koden, klicka <a href="script.js">här</a>.</p>






        `
    };

    function showStep(step) {
        const explanationDiv = document.getElementById(step);
        explanationDiv.innerHTML = explanations[step];
        explanationDiv.classList.toggle('hidden');
    }

    window.showStep = showStep;
});


document.querySelectorAll('.accordion').forEach(button => {
    button.addEventListener('click', () => {
        const panel = button.nextElementSibling;
        button.classList.toggle('active');
        if (panel.style.display === 'block') {
            panel.style.display = 'none';
        } else {
            panel.style.display = 'block';
        }
    });
});
