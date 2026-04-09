// src/admin/js/dataManager.js
// Centralized Data Management for Admin Panel

const DataManager = {
    // 1. Fetch data from backend API with fallback to mock JSON
    async getAll(type) {
        try {
            const res = await fetch(`/api/data/${type}`);
            if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
            return await res.json();
        } catch (err) {
            console.warn(`Backend API for ${type} unreachable, falling back to mock data...`);
            try {
                // Fallback to local JSON files in static mode
                const mockRes = await fetch(`/data/${type}.json`);
                if (!mockRes.ok) return [];
                return await mockRes.json();
            } catch (mockErr) {
                console.error(`Failed to fetch mock ${type} data`, mockErr);
                return [];
            }
        }
    },

    // 2. Add a new item (Mock implementation)
    async add(type, item) {
        if (!item.id) {
            item.id = Date.now().toString() + Math.random().toString(36).substring(2, 9);
        }
        if (!item.createdAt && !item.date) {
            item.createdAt = new Date().toISOString();
        }

        try {
            const res = await fetch(`/api/data/${type}`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(item)
            });
            
            if (res.ok) {
                const data = await res.json();
                return data.item;
            }
        } catch (err) {
            console.warn("Mutation failed (no backend). Changes will only be visible in the current session (mock mode).");
        }
        
        // Mock success for UI feedback
        return item;
    },

    // 3. Update an existing item (Mock implementation)
    async update(type, id, updatedData) {
        updatedData.updatedAt = new Date().toISOString();
        try {
            const res = await fetch(`/api/data/${type}/${id}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(updatedData)
            });
            if (res.ok) {
                const data = await res.json();
                return data.item;
            }
        } catch (err) {
            console.warn("Mutation failed (no backend). Mocking update...");
        }
        return updatedData;
    },

    // 4. Delete an item (Mock implementation)
    async delete(type, id) {
        try {
            const res = await fetch(`/api/data/${type}/${id}`, {
                method: 'DELETE'
            });
            if (res.ok) return true;
        } catch (err) {
            console.warn("Mutation failed (no backend). Mocking delete...");
        }
        return true;
    },

    // 5. Get by ID
    async getById(type, id) {
        const data = await this.getAll(type);
        return data.find(item => item.id == id) || null;
    }
};

window.DataManager = DataManager;

