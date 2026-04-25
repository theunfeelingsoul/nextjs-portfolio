export default function TechList({ tech }) {
  return (
    <ul className="flex flex-wrap gap-2">
      {tech.map((item) => (
        <li
          key={item}
          className="px-3 py-1 text-sm border rounded"
        >
          {item}
        </li>
      ))}
    </ul>
  );
}
