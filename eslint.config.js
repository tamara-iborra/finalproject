import { recommended } from "eslint-config-manzdev";

export default [
  ...recommended,
  {
    rules: {
      "import/order": [
        "error",
        {
          groups: [
            "builtin",
            "external",
            "internal",
            "parent",
            "sibling",
            "index"
          ],
          alphabeticalOrder: true,
          caseInsensitive: true
        }
      ]
    }
  }
];
