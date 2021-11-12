interface TagsInfoProps {
  tags: string[];
}

export function TagsInfo({ tags }: TagsInfoProps) {
  return (
    <div className="flex flex-row flex-wrap gap-1">
      {tags.map((text) => (
        <div className="p-2 border-gray-200 border-2 rounded-lg">{text}</div>
      ))}
    </div>
  );
}
