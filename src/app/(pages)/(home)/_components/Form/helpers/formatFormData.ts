export default function formatFormData(formData: FormData) {
  const age = formData.get('age') || '';
  const sex = formData.get('sex') || '';
  const weight = formData.get('weight') || '';
  const height = formData.get('height') || '';
  const highBP = formData.get('highBP') || 'off';
  const highChol = formData.get('highChol') || 'off';
  const smoker = formData.get('smoker') || 'off';
  const physActivity = formData.get('physActivity') || 'off';

  const formattedWeight = Number(
    weight.toString().replace(',', '.').replace(' Kg', '')
  );
  const formattedHeight = Number(
    height.toString().replace(',', '.').replace('m', '')
  );

  const bmi = formattedWeight / (formattedHeight * 2);

  return {
    bmi,
    age: parseInt(age.toString()),
    sex: sex.toString(),
    highBP: highBP.toString() !== 'off' ? true : false,
    highChol: highChol.toString() !== 'off' ? true : false,
    smoker: smoker.toString() !== 'off' ? true : false,
    physActivity: physActivity.toString() !== 'off' ? true : false,
  };
}
