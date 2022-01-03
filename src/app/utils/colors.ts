export module ColorsModule {
    export function rgbToRgba(rgb: string, alpha: number = 1): string {
        rgb = rgb.trim()
        if (!rgb.startsWith('rgb(')) {
            throw new Error("RGB value not starting with 'rgb('");
        }
        if (alpha > 1) {
            alpha = 1
            console.info('Alpha value should be less or equal 1');
        } else if (alpha < 0) {
            alpha = 0
            console.info('Alpha value should be greater or = 0');
        }

        let red, green, blue;
        [red, green, blue] = rgb.split(',');
        red = red.substring(4, red.length);
        blue = blue.substring(0, blue.length - 1)
      
        return `rgba(${red}, ${green}, ${blue}, ${alpha})`;
    }
}