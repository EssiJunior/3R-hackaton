// components/UniqueColorGenerator.tsx



class UniqueRandomColorGenerator {
  private generatedColors: Set<string>;

  constructor() {
    this.generatedColors = new Set(); 
  }


  generateRandomColor(): string {
    let color;
    do {
      color = `#${Math.floor(Math.random() * 0xffffff).toString(16).padStart(6, '0')}`;
    } while (this.generatedColors.has(color)); 


    this.generatedColors.add(color);
    return color;
  }


  reset() {
    this.generatedColors.clear();
  }
}

// const UniqueColorGenerator: React.FC = () => {
//   const [colors, setColors] = useState<string[]>([]);
//   const colorGenerator = new UniqueRandomColorGenerator();

//   // Fonction pour ajouter une nouvelle couleur unique à la liste
//   const addUniqueColor = () => {
//     const newColor = colorGenerator.generateRandomColor();
//     setColors([...colors, newColor]);
//   };

  