import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('SECURITY_OPTIONS', {schema: 'dbo' } )
export class SECURITY_OPTIONS {

    @Column('varchar', {
        nullable: false,
        primary: true,
        length: 16,
        name: 'SOP_USERID_C',
        })
    public SOP_USERID_C: string;

    @Column('varchar', {
        nullable: true,
        length: 1,
        name: 'SOP_BYPASS_C',
        })
    public SOP_BYPASS_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 1,
        name: 'SOP_DISPLAY_C',
        })
    public SOP_DISPLAY_C: string | null;

}
