import React, { useContext } from "react";
import { PopUpContext } from '../../../contexts/contextos/PopUpContext';


/* Styles */
import './section-info.scss'

export function SectionInfo({ tittle, contentInfo }) {
  const { closePopup } = useContext(PopUpContext);

  const handleOpenPopup = () => {
    closePopup();
  };

  return (
    <section id="institution_popUpInfo">
        <header>
          <h1>
            Patio
          </h1>
          <button onClick={handleOpenPopup}>
            X
          </button>
        </header>
        <section className="institution_popUpInfo_content">
          <article>
              <h1>Cancha de Futboll</h1>

              <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ullamcorper ac nisl vel bibendum. Mauris dolor urna, fringilla quis magna in, condimentum dictum arcu. Sed et elit ornare, consequat felis a, rutrum quam. Praesent lacinia lacus at sapien dictum, sed dapibus magna volutpat. Sed lacinia et tellus nec posuere. Nam pellentesque fringilla purus vel condimentum. Cras aliquam sollicitudin orci ut pharetra. Morbi eu leo eget nisi viverra lobortis at in turpis. Mauris arcu risus, scelerisque vitae gravida nec, ultrices ut tortor. Cras eros sem, dignissim nec fringilla eget, elementum eu arcu. Sed placerat rutrum purus sed fringilla. Vestibulum quis neque vitae arcu convallis scelerisque. Maecenas sagittis facilisis nisi sit amet condimentum. Fusce consectetur aliquet posuere. Vivamus quis luctus odio.
              </p>

              <img src="" alt="" />
          </article>
          <article>
              <h1>Cancha de Futboll</h1>

              <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ullamcorper ac nisl vel bibendum. Mauris dolor urna, fringilla quis magna in, condimentum dictum arcu. Sed et elit ornare, consequat felis a, rutrum quam. Praesent lacinia lacus at sapien dictum, sed dapibus magna volutpat. Sed lacinia et tellus nec posuere. Nam pellentesque fringilla purus vel condimentum. Cras aliquam sollicitudin orci ut pharetra. Morbi eu leo eget nisi viverra lobortis at in turpis. Mauris arcu risus, scelerisque vitae gravida nec, ultrices ut tortor. Cras eros sem, dignissim nec fringilla eget, elementum eu arcu. Sed placerat rutrum purus sed fringilla. Vestibulum quis neque vitae arcu convallis scelerisque. Maecenas sagittis facilisis nisi sit amet condimentum. Fusce consectetur aliquet posuere. Vivamus quis luctus odio.
              </p>

              <img src="" alt="" />
          </article>
          <article>
              <h1>Cancha de Futboll</h1>

              <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ullamcorper ac nisl vel bibendum. Mauris dolor urna, fringilla quis magna in, condimentum dictum arcu. Sed et elit ornare, consequat felis a, rutrum quam. Praesent lacinia lacus at sapien dictum, sed dapibus magna volutpat. Sed lacinia et tellus nec posuere. Nam pellentesque fringilla purus vel condimentum. Cras aliquam sollicitudin orci ut pharetra. Morbi eu leo eget nisi viverra lobortis at in turpis. Mauris arcu risus, scelerisque vitae gravida nec, ultrices ut tortor. Cras eros sem, dignissim nec fringilla eget, elementum eu arcu. Sed placerat rutrum purus sed fringilla. Vestibulum quis neque vitae arcu convallis scelerisque. Maecenas sagittis facilisis nisi sit amet condimentum. Fusce consectetur aliquet posuere. Vivamus quis luctus odio.
              </p>

              <img src="" alt="" />
          </article>
        </section>
    </section>
  );
}