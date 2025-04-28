import { useEffect,useState } from "react";

export const ModalInfo = (traducciones) =>{
    return(
        <ModalImg
                      image={selectedPreview}
                      onClose={() => setSelectedPreview(null)}
                      traducciones={traducciones}
                      project={project}
                    />
    )
}