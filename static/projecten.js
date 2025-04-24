const explanations = {
    "Moodboard": "A collection of images, materials, text, and other elements to convey a visual style.",
    "Style Scape": "A more refined version of the moodboard to represent brand visual direction.",
    "Brand Guide": "Documentation that defines your brand’s visual and messaging standards.",
    "Content Strategie": "A strategic approach to creating and distributing valuable content.",
    "Presentatie": "The final presentation of the project and its outcomes.",
    "Reflectie": "A reflection on the project process and outcomes."
  };

  function showExplanation(panel) {
    document.getElementById('explanation-text').textContent = explanations[panel];
  }