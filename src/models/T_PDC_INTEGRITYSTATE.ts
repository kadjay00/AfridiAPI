import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_PDC_INTEGRITYSTATE', {schema: 'dbo' } )
export class T_PDC_INTEGRITYSTATE {

    @Column('varchar', {
        nullable: false,
        primary: true,
        length: 4,
        name: 'PIS_STATECODE_C',
        })
    public PIS_STATECODE_C: string;

    @Column('varchar', {
        nullable: true,
        length: 40,
        name: 'PIS_MSGID_C',
        })
    public PIS_MSGID_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 10,
        name: 'PIS_INTERVENIENT_C',
        })
    public PIS_INTERVENIENT_C: string | null;

}
