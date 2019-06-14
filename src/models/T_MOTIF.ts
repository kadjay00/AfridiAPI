import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_MOTIF', {schema: 'dbo' } )
export class T_MOTIF {

    @Column('char', {
        nullable: false,
        primary: true,
        name: 'MOT_MOTIF_C',
        })
    public MOT_MOTIF_C: string;

    @Column('varchar', {
        nullable: true,
        length: 250,
        name: 'MOT_DESCRIPTION_C',
        })
    public MOT_DESCRIPTION_C: string | null;

    @Column('char', {
        nullable: false,
        primary: true,
        name: 'MOT_LABELLANG_C',
        })
    public MOT_LABELLANG_C: string;

    @Column('char', {
        nullable: false,
        primary: true,
        name: 'MOT_TYPE_C',
        })
    public MOT_TYPE_C: string;

    @Column('char', {
        nullable: true,
        name: 'MOT_SUBTYPE_C',
        })
    public MOT_SUBTYPE_C: string | null;

}
