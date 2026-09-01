.projects-section {
  padding: 80px 24px;
  max-width: 1200px;
  margin: 0 auto;
}

.projects-header {
  margin-bottom: 40px;
}

.projects-subtitle {
  color: var(--text-secondary);
  font-size: 1.05rem;
  max-width: 740px;
  margin-top: -10px;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 24px;
}

.project-card {
  background: var(--bg-card);
  border-radius: var(--radius);
  border: 1px solid var(--border-color);
  display: flex;
  flex-direction: column;
  transition: var(--transition);
  overflow: hidden;
  backdrop-filter: blur(12px);
}

.project-card:hover {
  transform: translateY(-6px);
  border-color: var(--border-active);
  box-shadow: 0 12px 35px rgba(16, 185, 129, 0.12);
}

.project-image-container {
  position: relative;
  width: 100%;
  height: 200px;
  overflow: hidden;
  background: #000;
  border-bottom: 1px solid var(--border-color);
}

.project-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.85;
  transition: transform 0.5s ease, opacity 0.3s ease;
}

.project-card:hover .project-image {
  transform: scale(1.06);
  opacity: 1;
}

.qa-role-badge {
  position: absolute;
  top: 12px;
  right: 12px;
  background: rgba(11, 15, 25, 0.85);
  backdrop-filter: blur(8px);
  color: var(--accent);
  border: 1px solid rgba(16, 185, 129, 0.4);
  padding: 4px 10px;
  border-radius: 20px;
  font-size: 0.75rem;
  font-family: var(--font-mono);
  font-weight: 600;
}

.project-content {
  padding: 24px;
  flex: 1;
  display: flex;
  flex-direction: column;
}

.project-title {
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 12px;
  line-height: 1.35;
  transition: var(--transition);
}

.project-card:hover .project-title {
  color: var(--accent);
}

.project-desc {
  color: var(--text-secondary);
  margin-bottom: 20px;
  font-size: 0.92rem;
  line-height: 1.6;
  flex: 1;
}

.project-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: auto;
}

.project-tag {
  font-family: var(--font-mono);
  color: var(--accent-cyan);
  font-size: 0.78rem;
  background: rgba(6, 182, 212, 0.08);
  border: 1px solid rgba(6, 182, 212, 0.2);
  padding: 4px 10px;
  border-radius: 4px;
}

.project-actions {
  display: flex;
  border-top: 1px solid var(--border-color);
  padding: 16px 24px;
  gap: 12px;
  background: rgba(11, 15, 25, 0.4);
}

.btn-project {
  flex: 1;
  text-align: center;
  padding: 9px 12px;
  border-radius: var(--radius-sm);
  font-size: 0.85rem;
  font-weight: 600;
  transition: var(--transition);
}

.btn-demo {
  background: rgba(16, 185, 129, 0.1);
  color: var(--accent);
  border: 1px solid rgba(16, 185, 129, 0.4);
}

.btn-demo:hover:not(.disabled) {
  background: var(--accent);
  color: var(--bg-primary);
}

.btn-demo.disabled {
  opacity: 0.5;
  cursor: not-allowed;
  border-color: rgba(255, 255, 255, 0.1);
  color: var(--text-muted);
}

.btn-github {
  background: transparent;
  color: var(--text-secondary);
  border: 1px solid var(--border-color);
}

.btn-github:hover {
  background: rgba(255, 255, 255, 0.08);
  color: var(--text-primary);
  border-color: var(--text-secondary);
}

@media (max-width: 768px) {
  .projects-section {
    padding: 50px 16px;
  }

  .projects-grid {
    grid-template-columns: 1fr;
    gap: 20px;
  }

  .project-content {
    padding: 18px 16px;
  }

  .project-actions {
    padding: 12px 16px;
  }
}
