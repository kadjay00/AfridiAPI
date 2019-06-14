import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_REJET', {schema: 'dbo' } )
export class T_REJET {

    @PrimaryGeneratedColumn({
        type: 'numeric',
        // scale:0,
        name: 'REJ_IDENTITY_N',
        })
    public REJ_IDENTITY_N: number;

    @Column('datetime', {
        nullable: true,
        name: 'REJ_CREATIONDATE_DAT',
        })
    public REJ_CREATIONDATE_DAT: Date | null;

    @Column('varchar', {
        nullable: true,
        length: 30,
        name: 'REJ_TYPEREJET_C',
        })
    public REJ_TYPEREJET_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 30,
        name: 'REJ_KEYREJET_C',
        })
    public REJ_KEYREJET_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 250,
        name: 'REJ_RAISON_C',
        })
    public REJ_RAISON_C: string | null;

}
