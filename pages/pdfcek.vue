<template>
  <div>
    <vue-html2pdf
      :show-layout="true"
      :float-layout="false"
      :enable-download="false"
      :preview-modal="true"
      filename="hee hee"
      :pdf-quality="2"
      :manual-pagination="true"
      pdf-format="a5"
      pdf-orientation="landscape"
      ref="html2Pdf"
    >
      <section slot="pdf-content">
        <!-- PDF Content Here -->
        <div>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis
          voluptatibus inventore soluta sunt doloremque ad vitae fugiat
          quibusdam impedit nulla. Eius temporibus similique impedit repellat
          possimus velit accusamus aliquid quae?
        </div>
      </section>
    </vue-html2pdf>
  </div>
</template>
