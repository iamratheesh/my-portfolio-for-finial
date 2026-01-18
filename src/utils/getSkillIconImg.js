export const getSkillIconImg = async (label) => {
  const formattedLabel = label.toLowerCase().trim();

  const simpleIconsUrl = `https://cdn.simpleicons.org/${formattedLabel}`;

  try {
   

    const fallbackResponse = await fetch(simpleIconsUrl, { method: 'HEAD' });
    if (fallbackResponse.ok) {
      return simpleIconsUrl;
    }

    return null;
  } catch (error) {
      return null;
  }
};
