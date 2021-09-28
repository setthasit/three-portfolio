const HomeSkillGrid: React.FC = ({ children }) => {
    return <div
        style={{
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexWrap: 'wrap'
        }}    
    >
        {children}
    </div>
}

export default HomeSkillGrid