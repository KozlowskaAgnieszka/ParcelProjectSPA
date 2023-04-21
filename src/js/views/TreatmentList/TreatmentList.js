import './styles/treatment-list.scss';
import { ShowTreatmentDetailsBtn } from './ShowTreatmentDetailsBtn';
import { AddToCartBtn } from '../../commons/addToCartBtn/addToCartBtn';

export function TreatmentList() {
  const header = document.querySelector('.header_nav');
  header.setAttribute('class', 'header_nav');

  const main = document.querySelector('main');
  main.setAttribute('class', 'treatments');

  const section = document.createElement('section');
  section.setAttribute('class', 'treatments_section');
  section.innerHTML = `<h1>Treatments</h1>`;

  const treatmentsList = document.createElement('ul');
  treatmentsList.setAttribute('class', 'treatments_list');

  fetch('http://localhost:3000/treatments')
    .then((response) => response.json())
    .then((treatments) => {
      const list = treatments.map((treatment) => {
        const treatmentItem = document.createElement('li');
        treatmentItem.setAttribute('class', 'treatments_treatmentItem');

        const treatmentHeader = document.createElement('div');
        treatmentHeader.setAttribute(
          'class',
          'treatments_treatmentItem_header'
        );
        treatmentHeader.innerHTML = `
        <h2 class="treatments_treatmentItem_header_name">${treatment.name}
        </h2>`;

        // Show Treatments details handler
        treatmentHeader.addEventListener('click', () =>
          treatmentBody.toggleAttribute('hidden')
        );

        // Treatment details
        const treatmentBody = document.createElement('div');
        const treatmentBodyAttributes = {
          hidden: '',
          class: 'treatments_treatmentItem_body',
        };
        for (const property in treatmentBodyAttributes) {
          treatmentBody.setAttribute(
            property,
            treatmentBodyAttributes[property]
          );
        }
        treatmentBody.innerHTML = `
          <div class="treatments_treatmentItem_description">
            <p>${treatment.description}</p>
          </div>
          <div class="treatments_treatmentItem_footer">
            <ul class="treatments_treatmentItem_footer_details">
              <li>Area: <span>${treatment.area}</span></li>
              <li>Duration: <span>${treatment.time} min</span></li>
              <li>Price: <span>${treatment.price.toFixed(2)} $</span></li>
            </ul>
          </div>`;

        const treatmentDetails = treatmentBody.lastChild.firstElementChild;
        treatmentDetails.append(AddToCartBtn(treatment));
        treatmentHeader.append(ShowTreatmentDetailsBtn());
        treatmentItem.append(treatmentHeader, treatmentBody);
        return treatmentItem;
      });

      treatmentsList.append(...list);
      section.append(treatmentsList);
    });

  return section;
}
