from PIL import Image
import os

def compress_image(input_path, output_path, quality=85):
    """
    Compresses an image with given quality and saves it to the output path.
    """
    img = Image.open(input_path)
    img.save(output_path, quality=quality)

def main():
    input_folder = "./"
    output_folder = "./"
    
    # Create output folder if it doesn't exist
    if not os.path.exists(output_folder):
        os.makedirs(output_folder)
    
    for i in range(1, 11):
        input_path = os.path.join(input_folder, f"{i}.jpg")
        output_path = os.path.join(output_folder, f"{i}c.jpg")
        
        # Compress image
        compress_image(input_path, output_path, quality=10)  # You can adjust the quality as needed

if __name__ == "__main__":
    main()
