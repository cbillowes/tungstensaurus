# Template Method Pattern

The Template Method Pattern is like following a recipe with some steps already decided but allowing variations in certain ingredients. It provides a skeleton for an algorithm but allows specific steps to be customized by subclasses. This way, you have a predefined structure, but the exact implementation can be adapted to fit different situations.

## Definition

The Template Method Pattern is a behavioral design pattern that defines the skeleton of an algorithm in the superclass but lets subclasses override specific steps of the algorithm without changing its structure. It consists of two main components: an abstract class (providing the template method with predefined steps) and concrete subclasses (implementing specific steps). The template method defines the overall algorithm's structure, ensuring consistency, while allowing variations in certain steps.

## Considerations

Considerations for the Template Method Pattern include carefully designing the template method to define the algorithm's core structure. It's crucial to identify and document the parts of the algorithm that subclasses can customize. Developers need to strike a balance between providing flexibility for customization and maintaining a clear structure in the template method. Careful consideration of potential variations in the algorithm is essential during the design phase.

## Benefits

The Template Method Pattern promotes code reuse by providing a common structure for algorithms. It allows for easy extension and modification of specific steps without affecting the overall algorithm. This pattern enhances code readability by centralizing the algorithm's structure in one place. It provides a framework for organizing and managing related algorithms while allowing for variations in specific parts.

## Trade-offs

While the Template Method Pattern offers flexibility, it may introduce the risk of violating the Open/Closed Principle if not carefully designed. Subclasses must adhere to the structure defined by the template method, potentially limiting certain variations. Developers need to carefully document and communicate which parts of the template method can be customized. Striking a balance between a fixed structure and the ability to customize is crucial.

## Practical Use-Case

**Document Conversion:**\
In a document conversion tool, the Template Method Pattern can be applied to define a common structure for converting different document formats. The abstract class provides a template method with predefined steps, such as opening the source document, processing content, and saving the converted document. Concrete subclasses can then customize specific steps for handling various document formats, ensuring consistency in the overall conversion process.

## Code Example

```python
# Abstract Class: DocumentConverter
class DocumentConverter:
    def convert_document(self):
        self.open_document()
        self.process_content()
        self.save_document()

    def open_document(self):
        raise NotImplementedError("Subclasses must implement open_document.")

    def process_content(self):
        raise NotImplementedError("Subclasses must implement process_content.")

    def save_document(self):
        raise NotImplementedError("Subclasses must implement save_document.")

# Concrete Class: PDFConverter
class PDFConverter(DocumentConverter):
    def open_document(self):
        print("Opening PDF document")

    def process_content(self):
        print("Processing PDF content")

    def save_document(self):
        print("Saving PDF document")

# Concrete Class: WordConverter
class WordConverter(DocumentConverter):
    def open_document(self):
        print("Opening Word document")

    def process_content(self):
        print("Processing Word content")

    def save_document(self):
        print("Saving Word document")

# Client Code
pdf_converter = PDFConverter()
word_converter = WordConverter()

pdf_converter.convert_document()
# Output:
# Opening PDF document
# Processing PDF content
# Saving PDF document

word_converter.convert_document()
# Output:
# Opening Word document
# Processing Word content
# Saving Word document
```

In this example, the Template Method Pattern is demonstrated with `DocumentConverter` as the abstract class and `PDFConverter` and `WordConverter` as concrete subclasses. The abstract class provides a template method (`convert_document`) with predefined steps, while concrete subclasses customize specific steps for opening, processing, and saving documents. The client code can then use different converters with a consistent structure for document conversion.
