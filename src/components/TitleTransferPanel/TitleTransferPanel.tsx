import React, { useContext } from "react";
import { LabelBordered } from "../UI/LabelBordered";

import { TitleTransferPanelContent } from "./TitleTransferPanelContent";
import { TokenContext } from "../../common/contexts/tokenInstancesContext";

export const TitleTransferPanel = () => {
  const { titleEscrow } = useContext(TokenContext);

  return (
    <section id="title-transfer-panel" className="bg-blue-lighter py-3">
      <div className="container-custom">
        <div className="row">
          <div className="col-12">
            <div className="py-2">
              <LabelBordered color="red">This is a transferable record</LabelBordered>
              <LabelBordered color="red">Negotiable</LabelBordered>
            </div>
          </div>
        </div>
        {titleEscrow && <TitleTransferPanelContent titleEscrow={titleEscrow} />}
      </div>
    </section>
  );
};
