type TechnologyTagProps = {
  tags: string[];
};

const TechnologyTags: React.FC<TechnologyTagProps> = ({ tags }) => {
  return tags.map((tag) => (
    <span key={tag} className="technology-tag px-3 py-1 text-xs font-semibold mr-2 mb-2">
      {tag}
    </span>
  ))
}

export default TechnologyTags;