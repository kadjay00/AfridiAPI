import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_EAI_INTEGRITY', {schema: 'dbo' } )
export class T_EAI_INTEGRITY {

    @Column('varchar', {
        nullable: false,
        primary: true,
        length: 100,
        name: 'EAI_CONTEXT_C',
        })
    public EAI_CONTEXT_C: string;

    @Column('varchar', {
        nullable: false,
        primary: true,
        length: 100,
        name: 'EAI_UID_C',
        })
    public EAI_UID_C: string;

    @Column('datetime', {
        nullable: false,
        name: 'EAI_EXPIRY_D',
        })
    public EAI_EXPIRY_D: Date;

}
