const inputs = Object.fromEntries([
    'auto_low', 'auto_mid', 'auto_high',
    'tele_low', 'tele_mid', 'tele_high',
    'supercharged', 'links',
    'auto_balance', 'auto_dock', 'mobility',
    'tele_balance', 'tele_dock', 'parked'
].map(e => [e, <HTMLInputElement>document.getElementById(e)!]));

const output = document.getElementById('score')!;

const resetButton = document.getElementById('reset')!;

console.log(inputs);

const updateScore = () => {
    const scores = Object.fromEntries(
        Object.entries(inputs)
            .map(([k,v]) => [k, parseInt(v.value)])
    );

    const score =
       3 * scores.auto_low +
       4 * scores.auto_mid +
       6 * scores.auto_high +
       2 * scores.tele_low +
       3 * scores.tele_mid +
       5 * scores.tele_high +
       3 * scores.supercharged +
       5 * scores.links +
       6 * scores.tele_dock +
       10 * scores.tele_balance +
       3 * scores.mobility +
       8 * scores.auto_dock +
       12 * scores.auto_balance +
       2 * scores.parked;

    output.innerText = score.toString();
}

const resetAll= () => {
    Object.values(inputs).forEach(e => e.value = '0');
    updateScore();
}

Object.values(inputs).forEach(e => e.addEventListener('change', updateScore));

resetButton.addEventListener('click', resetAll);

updateScore();
