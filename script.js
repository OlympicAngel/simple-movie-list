/**
 * 
 * @param {SubmitEvent} event 
 */
function NewMovie(event) {
    event.preventDefault();

    const title = getAndReset("#title")
    const image = getAndReset("#image")
    const rating = getAndReset("#rating")

    const tableRows = document.getElementById("movieItems");
    const newRow = document.createElement("tr");
    newRow.innerHTML = `<td scope="row">
                            <img width="100" height="100" style="border: 1px solid gray; padding: 10px; border-radius: 5px;" src="${image}" />
                        </td>
                        <td>${title}</td>
                        <td>
                            <span onclick="rateModify(this,1)">+</span>
                            <span onclick="rateModify(this,-1)">-</span>
                            <span class="ratingValue">${rating}</span>
                        </td>
                        <td>
                            <button class="btn btn-danger" onclick="deleteMovie(this)">x</button>
                        </td>`;
    tableRows.append(newRow)

}

function getAndReset(selector) {
    const element = document.querySelector(selector);
    const val = element.value;
    element.value = null
    return val;
}

/**
 * 
 * @param {Element} el 
 */
function deleteMovie(el) {
    const row = el.parentElement.parentElement;
    row.remove();
}

/**
 * 
 * @param {Element} el 
 */
function rateModify(el, by) {
    let rateEl = el.parentElement.querySelector(".ratingValue");
    rateEl.innerHTML = Math.max(1, Math.min(5, (Number(rateEl.innerHTML) + by)))
}