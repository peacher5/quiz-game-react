## Quiz Game

> A Basic Quiz Game using React

**Demo:** https://quiz-game-with-react.web.app

### Project Structure

- **src**
  - **components** -- เก็บ React Component ที่ใช้ร่วมกันได้
  - **img** -- เก็บรูปภาพ
  - **pages** -- เก็บ React Component ที่เป็นส่วนของหน้า Web Page
  - **services** -- เก็บ Service ของ Firebase ที่พร้อมใช้งานแล้ว

### Example Data in Realtime Database

```json
{
  "quizzes": [
    {
      "question": "53 - 39 = ?",
      "choices": [
        "16",
        "22",
        "12",
        "14"
      ],
      "correctIndex": 3
    },
    {
      "question": "อะไรไม่ใช่ผลไม้",
      "choices": [
        "🥝",
        "🥔",
        "🍅",
        "🥑"
      ],
      "correctIndex": 1
    },
    {
      "question": "macOS 11 ____",
      "choices": [
        "Sierra",
        "Catalina",
        "Mojave",
        "Big Sur"
      ],
      "correctIndex": 3
    },
    {
      "question": "มีม้าหุ่นยนต์อยู่ 25 ตัว กับสนามแข่งม้า 1 สนาม สนามแข่งรองรับม้าได้ 5 ตัวต่อการแข่ง 1 ครั้ง ผลลัพธ์ของการแข่งแต่ละครั้งจะทราบเพียงลำดับการเข้าเส้นชัยของม้าแต่ละตัวเท่านั้น หากต้องการหาม้าที่วิ่งเร็วที่สุด 3 ตัวแรก จะต้องใช้สนามแข่งอย่างน้อยกี่ครั้ง",
      "choices": [
        "7",
        "8",
        "11",
        "25"
      ],
      "correctIndex": 0
    }
  ]
}
```
