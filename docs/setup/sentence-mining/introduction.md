---
id: example-page
title: Example Markdown Page
sidebar_label: Example Page
sidebar_position: 1
---

# Example Markdown Page

This is an example page demonstrating **Markdown syntax** for Docusaurus.

---

## Table of Contents
- [Tabs](#tabs)
- [Text Formatting](#text-formatting)
- [Lists](#lists)
- [Links & Images](#links--images)
- [Tables](#tables)
- [Code Blocks](#code-blocks)
- [Blockquotes](#blockquotes)
- [Admonitions](#admonitions)

---
## Tabs
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
  <TabItem value="apple" label="Apple" default>
    This is an apple 🍎
  </TabItem>
  <TabItem value="orange" label="Orange">
    This is an orange 🍊
  </TabItem>
  <TabItem value="banana" label="Banana">
    This is a banana 🍌
  </TabItem>
</Tabs>

<Tabs
  defaultValue="apple"
  values={[
    {label: 'Apple', value: 'apple'},
    {label: 'Orange', value: 'orange'},
    {label: 'Banana', value: 'banana'},
  ]}>
  <TabItem value="apple">This is an apple 🍎</TabItem>
  <TabItem value="orange">This is an orange 🍊</TabItem>
  <TabItem value="banana">This is a banana 🍌</TabItem>
</Tabs>

## Text Formatting

You can format text using:

- **Bold**: `**Bold**` → **Bold**
- *Italic*: `*Italic*` → *Italic*
- ~~Strikethrough~~: `~~Strikethrough~~` → ~~Strikethrough~~
- `Inline Code`: `` `Inline Code` `` → `Inline Code`

---

## Lists

### Unordered List:
- Item 1
- Item 2
  - Sub-item 1
  - Sub-item 2

### Ordered List:
1. First item
2. Second item
3. Third item

---

## Links & Images

### Link:
[Visit Docusaurus](https://docusaurus.io/)

### Image:
![Docusaurus Logo](https://docusaurus.io/img/docusaurus.png)

---

## Tables

| Column 1 | Column 2 | Column 3 |
|----------|----------|----------|
| Data 1   | Data 2   | Data 3   |
| Data 4   | Data 5   | Data 6   |

---

## Code Blocks

### Inline Code
Use `` `console.log("Hello, World!");` `` for inline code.

### JavaScript Code Block:
```js
console.log("Hello, Docusaurus!");
```
---

### Python Code Block:
```python
def greet():
    print("Hello, Docusaurus!")

greet()
```

---

## Blockquotes

> "This is a blockquote example in Markdown."

> Dorothy followed her through many of the beautiful rooms in her castle.
>
> The Witch bade her clean the pots and kettles and sweep the floor and keep the fire fed with wood.


> Dorothy followed her through many of the beautiful rooms in her castle.
>
>> The Witch bade her clean the pots and kettles and sweep the floor and keep the fire fed with wood.

> #### The quarterly results look great!
>
> - Revenue was off the chart.
> - Profits were higher than ever.
>
>  *Everything* is going according to **plan**.
---

## Admonitions

:::note

Some **content** with _Markdown_ `syntax`. Check [this `api`](#).

:::

:::tip

Some **content** with _Markdown_ `syntax`. Check [this `api`](#).

:::

:::info

Some **content** with _Markdown_ `syntax`. Check [this `api`](#).

:::

:::warning

Some **content** with _Markdown_ `syntax`. Check [this `api`](#).

:::

:::danger

Some **content** with _Markdown_ `syntax`. Check [this `api`](#).

:::


Here's a simple footnote,[^1] and here's a longer one.[^bignote]

[^1]: This is the first footnote.

[^bignote]: Here's one with multiple paragraphs and code.

    Indent paragraphs to include them in the footnote.

    `{ my code }`

    Add as many paragraphs as you like.

## Task List

- [x] Write the press release
- [ ] Update the website
- [ ] Contact the media    


## Highlight
I need to highlight these <mark>very important words</mark>.

## Subscript
H<sub>2</sub>O

## Superscript
X<sup>2</sup>

## Code

Markdown	HTML	Rendered Output
At the command prompt, type `nano`.

## Details

### Details element example

<details>
  <summary>Toggle me!</summary>

  This is the detailed content

  ```js
  console.log("Markdown features including the code block are available");
  ```

  You can use Markdown here including **bold** and _italic_ text, and [inline link](https://docusaurus.io)
  <details>
    <summary>Nested toggle! Some surprise inside...</summary>

    😲😲😲😲😲
  </details>
</details>

lorem ipsum [^2] dolor sir amet.[^3]

[^2]: This is the third footnote.

[^3]: This is the forth footnote.
